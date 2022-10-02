import dayjs from 'dayjs'

type InputType = string | Date | number

export const getDateDifferenceInYear = (to: InputType, from: InputType) => {
  return dayjs(to).diff(from, 'year')
}
