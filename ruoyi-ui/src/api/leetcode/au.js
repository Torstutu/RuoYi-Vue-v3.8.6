import request from '@/utils/request'

// 查询活动用户列表
export function listAu(query) {
  return request({
    url: '/leetcode/au/list',
    method: 'get',
    params: query
  })
}

// 查询活动用户详细
export function getAu(activityId) {
  return request({
    url: '/leetcode/au/' + activityId,
    method: 'get'
  })
}

// 新增活动用户
export function addAu(data) {
  return request({
    url: '/leetcode/au',
    method: 'post',
    data: data
  })
}

// 修改活动用户
export function updateAu(data) {
  return request({
    url: '/leetcode/au',
    method: 'put',
    data: data
  })
}

// 删除活动用户
export function delAu(activityId) {
  return request({
    url: '/leetcode/au/' + activityId,
    method: 'delete'
  })
}
