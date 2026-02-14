/**
 * FieldMapper component - UI for custom CSV column mapping
 */

import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Icon,
  Select,
  TextField,
  Spinner,
  Banner,
} from '@stripe/ui-extension-sdk/ui';
import type { createApiClient } from '../api';

interface FieldMapping {
  id: string;
  name: string;
  mappings: ColumnMapping[];
  createdAt: string;
  updatedAt: string;
}

interface ColumnMapping {
  csvColumn: string;
  stripeField: string;
  transform: 'none' | 'boolean' | 'trim' | 'lowercase';
}

interface FieldMapperProps {
  api: ReturnType<typeof createApiClient>;
  csvHeaders?: string[];
  onMappingSelect?: (mappingId: string | null) => void;
  selectedMappingId?: string | null;
}

const STRIPE_FIELDS = [
  { value: 'id', label: 'Product ID' },
  { value: 'name', label: 'Name' },
  { value: 'description', label: 'Description' },
  { value: 'active', label: 'Active' },
];

const TRANSFORMS = [
  { value: 'none', label: 'None' },
  { value: 'boolean', label: 'Boolean (yes/no → true/false)' },
  { value: 'trim', label: 'Trim whitespace' },
  { value: 'lowercase', label: 'Lowercase' },
];

const FieldMapper = ({ 
  api, 
  csvHeaders = [], 
  onMappingSelect,
  selectedMappingId,
}: FieldMapperProps) => {
  const [mappings, setMappings] = useState<FieldMapping[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  
  // New mapping form state
  const [newMappingName, setNewMappingName] = useState('');
  const [newColumnMappings, setNewColumnMappings] = useState<ColumnMapping[]>([]);

  // Load saved mappings
  useEffect(() => {
    loadMappings();
  }, [api]);

  const loadMappings = async () => {
    try {
      setIsLoading(true);
      const response = await api.get<{ mappings: FieldMapping[] }>('/mappings');
      setMappings(response.mappings);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load mappings');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateMapping = async () => {
    if (!newMappingName.trim()) {
      setError('Mapping name is required');
      return;
    }
    if (newColumnMappings.length === 0) {
      setError('At least one column mapping is required');
      return;
    }

    try {
      const response = await api.post<FieldMapping>('/mappings', {
        name: newMappingName,
        mappings: newColumnMappings,
      });
      
      setMappings(prev => [response, ...prev]);
      setIsCreating(false);
      setNewMappingName('');
      setNewColumnMappings([]);
      onMappingSelect?.(response.id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create mapping');
    }
  };

  const handleDeleteMapping = async (mappingId: string) => {
    try {
      await api.delete(`/mappings/${mappingId}`);
      setMappings(prev => prev.filter(m => m.id !== mappingId));
      if (selectedMappingId === mappingId) {
        onMappingSelect?.(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete mapping');
    }
  };

  const addColumnMapping = () => {
    setNewColumnMappings(prev => [
      ...prev,
      { csvColumn: '', stripeField: 'name', transform: 'none' },
    ]);
  };

  const updateColumnMapping = (index: number, field: keyof ColumnMapping, value: string) => {
    setNewColumnMappings(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const removeColumnMapping = (index: number) => {
    setNewColumnMappings(prev => prev.filter((_, i) => i !== index));
  };

  if (isLoading) {
    return (
      <Box css={{ stack: 'x', gap: 'small', alignY: 'center' }}>
        <Spinner size="small" />
        <span>Loading mappings...</span>
      </Box>
    );
  }

  return (
    <Box css={{ stack: 'y', gap: 'medium' }}>
      {error && (
        <Banner
          type="critical"
          title="Error"
          description={error}
          onDismiss={() => setError(null)}
        />
      )}

      {/* Saved Mappings */}
      {!isCreating && (
        <Box css={{ stack: 'y', gap: 'small' }}>
          <Box css={{ font: 'body', fontWeight: 'semibold' }}>
            Saved Mappings
          </Box>
          
          {mappings.length === 0 ? (
            <Box css={{ color: 'secondary' }}>
              No saved mappings. Create one to map custom CSV columns.
            </Box>
          ) : (
            <Select
              label="Select mapping"
              value={selectedMappingId ?? ''}
              onChange={(e) => onMappingSelect?.(e.target.value || null)}
            >
              <option value="">None (use default columns)</option>
              {mappings.map((mapping) => (
                <option key={mapping.id} value={mapping.id}>
                  {mapping.name} ({mapping.mappings.length} fields)
                </option>
              ))}
            </Select>
          )}

          <Button type="secondary" onPress={() => setIsCreating(true)}>
            <Icon name="add" />
            <span>Create New Mapping</span>
          </Button>
        </Box>
      )}

      {/* Create Mapping Form */}
      {isCreating && (
        <Box css={{ stack: 'y', gap: 'medium', padding: 'medium', background: 'container' }}>
          <Box css={{ font: 'body', fontWeight: 'semibold' }}>
            Create Field Mapping
          </Box>

          <TextField
            label="Mapping Name"
            placeholder="e.g., My CSV Format"
            value={newMappingName}
            onChange={(e) => setNewMappingName(e.target.value)}
          />

          <Box css={{ stack: 'y', gap: 'small' }}>
            <Box css={{ font: 'caption', fontWeight: 'semibold' }}>
              Column Mappings
            </Box>
            
            {newColumnMappings.map((mapping, index) => (
              <Box key={index} css={{ stack: 'x', gap: 'small', alignY: 'bottom' }}>
                <Box css={{ width: 'fill' }}>
                  {csvHeaders.length > 0 ? (
                    <Select
                      label="CSV Column"
                      value={mapping.csvColumn}
                      onChange={(e) => updateColumnMapping(index, 'csvColumn', e.target.value)}
                    >
                      <option value="">Select column...</option>
                      {csvHeaders.map((header) => (
                        <option key={header} value={header}>{header}</option>
                      ))}
                    </Select>
                  ) : (
                    <TextField
                      label="CSV Column"
                      placeholder="Column name"
                      value={mapping.csvColumn}
                      onChange={(e) => updateColumnMapping(index, 'csvColumn', e.target.value)}
                    />
                  )}
                </Box>
                
                <Box css={{ width: 'fill' }}>
                  <Select
                    label="Stripe Field"
                    value={mapping.stripeField}
                    onChange={(e) => updateColumnMapping(index, 'stripeField', e.target.value)}
                  >
                    {STRIPE_FIELDS.map((field) => (
                      <option key={field.value} value={field.value}>{field.label}</option>
                    ))}
                  </Select>
                </Box>

                <Box css={{ width: 'fill' }}>
                  <Select
                    label="Transform"
                    value={mapping.transform}
                    onChange={(e) => updateColumnMapping(index, 'transform', e.target.value)}
                  >
                    {TRANSFORMS.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </Select>
                </Box>

                <Button
                  type="destructive"
                  size="small"
                  onPress={() => removeColumnMapping(index)}
                >
                  <Icon name="delete" />
                </Button>
              </Box>
            ))}

            <Button type="secondary" size="small" onPress={addColumnMapping}>
              <Icon name="add" />
              <span>Add Column</span>
            </Button>
          </Box>

          <Box css={{ stack: 'x', gap: 'small', distribute: 'space-between' }}>
            <Button type="secondary" onPress={() => {
              setIsCreating(false);
              setNewMappingName('');
              setNewColumnMappings([]);
            }}>
              Cancel
            </Button>
            <Button type="primary" onPress={handleCreateMapping}>
              Save Mapping
            </Button>
          </Box>
        </Box>
      )}

      {/* Selected Mapping Details */}
      {selectedMappingId && !isCreating && (
        <Box css={{ stack: 'y', gap: 'small' }}>
          {mappings.filter(m => m.id === selectedMappingId).map(mapping => (
            <Box key={mapping.id} css={{ stack: 'y', gap: 'xsmall' }}>
              <Box css={{ font: 'caption', color: 'secondary' }}>
                Mapping: {mapping.name}
              </Box>
              <Box css={{ font: 'caption' }}>
                {mapping.mappings.map(m => (
                  <Box key={m.csvColumn} css={{ color: 'secondary' }}>
                    {m.csvColumn} → {m.stripeField}
                    {m.transform !== 'none' && ` (${m.transform})`}
                  </Box>
                ))}
              </Box>
              <Button
                type="destructive"
                size="small"
                onPress={() => handleDeleteMapping(mapping.id)}
              >
                Delete Mapping
              </Button>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default FieldMapper;
