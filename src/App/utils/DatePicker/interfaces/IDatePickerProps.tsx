export interface IDatePickerProps {
  date?: string;
  focused: boolean;
  onDateChange: (newDate: any) => void;
  onFocusChange: () => void;
}
