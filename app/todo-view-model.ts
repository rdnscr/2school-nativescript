import { Observable, ObservableArray } from '@nativescript/core';
import { TodoItem } from './todo';
import items from './assets/todo.json';
export class TodoViewModel extends Observable {
  private _items: ObservableArray<TodoItem>;

  constructor() {
    super(); // Load initial data from JSON
    this.load();
  }

  load(): void {
    this._items = new ObservableArray([...items.todos]);
    this.notifyPropertyChange('todos', this._items);
    this.notifyPropertyChange('title', this.title);
  }

  get title(): string {
    return `A list of ${this._items.length} todos`;
  }

  get todos(): ObservableArray<TodoItem> {
    return this._items;
  }

  remove(indexToDelete: number) {
    this._items.splice(indexToDelete, 1);
    this.notifyPropertyChange('title', this.title);
  }

  reset() {
    this.load();
  }

  add(newTodo: string) {
    this._items.push({ description: newTodo });
  }
}
