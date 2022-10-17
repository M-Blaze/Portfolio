import dayjs from 'dayjs'

type InputType = string | Date | number

export const getDateDifferenceInYear = (to: InputType, from: InputType) => {
  return dayjs(to).diff(from, 'year')
}

export const getDateDifferenceForWorkTime = (to: InputType, from: InputType) => {
  const endDate = to === 'present' ? new Date() : to
  const totalMonths = dayjs(endDate).diff(from, 'month') + 1
  const years = Math.floor(totalMonths / 12)
  const months = Math.floor(totalMonths % 12)
  const formattedStartDate = dayjs(from).format('MMM YYYY')
  const formattedEndDate = to === 'present' ? 'Present' : dayjs(to).format('MMM YYYY')
  const stringEnd = years ? `${years} yrs ${months} mos` : `${months} mos`

  return `${formattedStartDate} - ${formattedEndDate} : ${stringEnd}`
}

export const formatBlogDate = (inputDate: string) => {
  return dayjs(inputDate).format('YYYY-MMM-DD')
}
