export interface IDatePickerProps {
  date: string;
  dateFormat: string;
  focused: boolean;
  onDateChange: (newDate: any) => void;
  onFocusChange: () => void;
}
