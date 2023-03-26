import dmRequest from './request'

/**
 * 获取新能源充电桩页面的数据( get请求,不需要参数 )
 */
export function getPowerScreenData() {
  return dmRequest.get({
    url: "/powerScreen/allData"
  })
}
