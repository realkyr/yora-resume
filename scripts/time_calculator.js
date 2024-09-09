export const findDifference = (start, end) => {
  const totalMonths = end.diff(start.format('YYYY-MM-DD'), 'month')

  console.log('totalMonths', totalMonths)
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  return {
    year: years,
    month: months
  }
}