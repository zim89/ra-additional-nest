import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  notes = [
    {
      id: '1',
      name: 'Shopping list',
      created_at: '02.05.2023',
      category: 'Task',
      content: 'Mango, tomatos',
      dates: [],
      isArchived: true,
    },
    {
      id: '2',
      name: 'Learn TS',
      created_at: '02.05.2023',
      category: 'Task',
      content: 'Mango, tomatos',
      dates: [],
      isArchived: false,
    },
    {
      id: '3',
      name: 'Shakespeare',
      created_at: '02.05.2023',
      category: 'Quote',
      content: 'Be not afraid of greatness.',
      dates: ['02.05.2023'],
      isArchived: false,
    },
    {
      id: '4',
      name: 'Repair phone',
      created_at: '2023.17.07',
      category: 'Task',
      content: 'By new instruments',
      dates: ['02.06.2023'],
      isArchived: false,
    },
    {
      id: '5',
      name: 'New  hobby',
      created_at: '02.06.2023',
      category: 'Idea',
      content: 'Kill 7 flies',
      dates: [],
      isArchived: false,
    },
    {
      id: '6',
      name: 'Plato',
      created_at: '03.05.2023',
      category: 'Quote',
      content: 'Courage is knowing what not to fear',
      dates: [],
      isArchived: false,
    },
    {
      id: 'MLgdU487TlFAv-1kCX9G4',
      created_at: '04.08.2023 01:41:22',
      name: 'Shopping list',
      category: 'Task',
      content: 'Mango, tomatos',
      dates: ['12.12.2022'],
      isArchived: false,
    },
    {
      id: '24Ql_txg6OKJDYHx9e3_R',
      created_at: '04.08.2023 01:41:47',
      name: 'Shopping list',
      category: 'Task',
      content: 'Mango, tomatos',
      dates: [],
      isArchived: false,
    },
    {
      id: 'NbBKfUJoz3CSh0HRbvc19',
      created_at: '04.08.2023 02:37:30',
      name: 'Shopping list',
      category: '',
      content: 'Mango, tomatos',
      dates: [],
      isArchived: false,
    },
    {
      id: 'c-LjxzQ88WZR3yTgQqehy',
      created_at: '06.08.2023 12:17:01',
      name: 'Shopping list',
      category: 'Task',
      content: '2222',
      dates: [],
      isArchived: false,
    },
  ];

  categories = [
    { id: '1', label: 'Task', value: 'Task' },
    { id: '2', label: 'Quote', value: 'Quote' },
    { id: '3', label: 'Idea', value: 'Idea' },
    { id: '4', label: 'Random Thought', value: 'Random Thought' },
  ];

  getStats() {
    const stats = [];

    this.categories.forEach((cat) => {
      const item = { category: cat.label, active: 0, archived: 0 };
      const filteredNotes = this.notes.filter(
        (note) => note.category === cat.label,
      );
      filteredNotes.forEach((el) => {
        el.isArchived
          ? (item.archived = item.archived + 1)
          : (item.active = item.active + 1);
      });
      stats.push(item);
    });

    return stats;
  }

  getAll() {
    return this.notes;
  }

  getById(id: string) {
    const result = this.notes.find((note) => note.id === id);
    return result || null;
  }

  create(dto: CreateNoteDto) {
    const newNote = {
      id: Date.now().toString(),
      created_at: Date.now().toString(),
      name: dto.name,
      category: dto.category,
      content: dto.content,
      dates: dto.dates,
      isArchived: false,
    };
    this.notes.push(newNote);
    return newNote;
  }

  remove(id: string) {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index === -1) return null;
    const deleteNote = this.notes[index];
    this.notes.splice(index, 1);
    return deleteNote;
  }

  update(dto: UpdateNoteDto, id: string) {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index === -1) return null;
    this.notes[index] = { ...this.notes[index], ...dto };
    return this.notes[index];
  }
}
