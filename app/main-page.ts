import {
  EventData,
  Page,
  ItemEventData,
  SwipeGestureEventData,
  SwipeDirection,
} from "@nativescript/core";
import { TodoViewModel } from "./todo-view-model";

let page;
let model;

export function navigatingTo(args: EventData) {
  page = <Page>args.object;
  model = new TodoViewModel();
  page.bindingContext = model;
}

export function remove(args: ItemEventData) {
  model.remove(args.index as number);
  const listView = page.getViewById("listView");
  listView.refresh();
}

export function reload(args: SwipeGestureEventData) {
  if (args.direction === SwipeDirection.down) {
    model.reset();
    const listView = page.getViewById("listView");
    listView.refresh();
  }
}

export function add() {
  let newItem = page.getViewById("newTodo");
  model.add(newItem.text);
}
