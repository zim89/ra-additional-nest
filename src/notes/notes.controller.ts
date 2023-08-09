import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  getAll() {
    return this.notesService.getAll();
  }

  @Get('/stats')
  getStats() {
    return this.notesService.getStats();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.notesService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateNoteDto) {
    return this.notesService.create(dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notesService.remove(id);
  }

  @Patch(':id')
  patch(@Body() dto: UpdateNoteDto, @Param('id') id: string) {
    return this.notesService.update(dto, id);
  }
}
