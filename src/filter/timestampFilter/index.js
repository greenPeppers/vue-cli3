import moment from '@/utils/moment'

export default (data, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (!data) return ''
  else return moment(data).format(format)
}