import request from "./axios-service";

export function getSliders() {
  return request({
    url: '/api/slider/getSliders',
  })
}