import { SupportFileRow } from '../MaintenanceSupportFilesPage'

export const mockSupportFiles: SupportFileRow[] = [
  {
    id: '1',
    name: '2023-10-01 12:00:00',
    files: [
      {
        description: 'File Description 1',
        sizeMiB: 30000,
        group: 'Group 1',
        name: 'File 1',
        source: {
          host: 'Dell 13',
          role: 'Control-Coveraged',
        },
        status: {
          current: 'current',
          createdAt: '2023-10-01T12:00:00Z',
          isCreating: false,
        },
        url: 'https://example.com/file1',
      },
      {
        description: 'File Description 2',
        sizeMiB: 30000,
        group: 'Group 2',
        name: 'File 2',
        source: {
          host: 'Dell 14',
          role: 'Control-Coveraged',
        },
        status: {
          current: 'current',
          createdAt: '2023-10-01T12:00:00Z',
          isCreating: false,
        },
        url: 'https://example.com/file2',
      },
      {
        description: 'File Description 3',
        sizeMiB: 3000,
        group: 'Group 3',
        name: 'File 3',
        source: {
          host: 'Dell 53',
          role: 'Control-Coveraged',
        },
        status: {
          current: 'current',
          createdAt: '2023-10-01T12:00:00Z',
          isCreating: false,
        },
        url: 'https://example.com/file3',
      },
      {
        description: 'File Description 4',
        sizeMiB: 30000,
        group: 'Group 4',
        name: 'File 4',
        source: {
          host: 'Dell 16',
          role: 'Control-Coveraged',
        },
        status: {
          current: 'current',
          createdAt: '2023-10-01T12:00:00Z',
          isCreating: false,
        },
        url: 'https://example.com/file4',
      },
    ],
    sizeMiB: 30000,
    description: 'Files Comments',
    status: {
      createdAt: '2023-10-01T12:00:00Z',
      isCreating: false,
      current: 'current',
    },
  },
]
