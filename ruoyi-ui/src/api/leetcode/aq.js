import request from '@/utils/request'

// 查询活动题单列表
export function listAq(query) {
  return request({
    url: '/leetcode/aq/list',
    method: 'get',
    params: query
  })
}

// 查询活动题单详细
export function getAq(activityId) {
  return request({
    url: '/leetcode/aq/' + activityId,
    method: 'get'
  })
}

// 新增活动题单
export function addAq(data) {
  return request({
    url: '/leetcode/aq',
    method: 'post',
    data: data
  })
}

// 修改活动题单
export function updateAq(data) {
  return request({
    url: '/leetcode/aq',
    method: 'put',
    data: data
  })
}

// 删除活动题单
export function delAq(activityId) {
  return request({
    url: '/leetcode/aq/' + activityId,
    method: 'delete'
  })
}
