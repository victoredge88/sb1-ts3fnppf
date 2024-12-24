type TimeSlot = {
  hour: number;
  minute: number;
};

export const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  for (let hour = 9; hour < 19; hour++) {
    slots.push({ hour, minute: 0 });
  }
  return slots;
};

export const formatTime = (slot: TimeSlot): string => {
  return `${slot.hour.toString().padStart(2, '0')}:${slot.minute.toString().padStart(2, '0')}`;
};