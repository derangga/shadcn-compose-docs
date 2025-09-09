export type Content = {
  image: string;
  code: string;
};
export type Variant = {
  name: string;
  content: Content;
};

export type Component =
  | "accordion"
  | "alert"
  | "alert-dialog"
  | "avatar"
  | "badge"
  | "bottom-sheet"
  | "button"
  | "calendar"
  | "card"
  | "carousel"
  | "checkbox"
  | "combobox"
  | "date-picker"
  | "dialog"
  | "dropdown-menu"
  | "input"
  | "popover"
  | "progress"
  | "radio-group"
  | "select"
  | "sidebar"
  | "skeleton"
  | "slider"
  | "sonner"
  | "switch"
  | "tabs";
