import request from '@/utils/request'

// 查询力扣题单列表
export function listQuestions(query) {
  return request({
    url: '/leetcode/questions/list',
    method: 'get',
    params: query
  })
}

// 查询力扣题单详细
export function getQuestions(questionId) {
  return request({
    url: '/leetcode/questions/' + questionId,
    method: 'get'
  })
}

// 新增力扣题单
export function addQuestions(data) {
  return request({
    url: '/leetcode/questions',
    method: 'post',
    data: data
  })
}

// 修改力扣题单
export function updateQuestions(data) {
  return request({
    url: '/leetcode/questions',
    method: 'put',
    data: data
  })
}

// 删除力扣题单
export function delQuestions(questionId) {
  return request({
    url: '/leetcode/questions/' + questionId,
    method: 'delete'
  })
}
