import request from '@/utils/request'

// 查询刷题活动列表
export function listActivity(query) {
  return request({
    url: '/leetcode/activity/list',
    method: 'get',
    params: query
  })
}

// 查询刷题活动详细
export function getActivity(activityId) {
  return request({
    url: '/leetcode/activity/' + activityId,
    method: 'get'
  })
}

// 新增刷题活动
export function addActivity(data) {
  return request({
    url: '/leetcode/activity',
    method: 'post',
    data: data
  })
}

// 修改刷题活动
export function updateActivity(data) {
  return request({
    url: '/leetcode/activity',
    method: 'put',
    data: data
  })
}

// 删除刷题活动
export function delActivity(activityId) {
  return request({
    url: '/leetcode/activity/' + activityId,
    method: 'delete'
  })
}
