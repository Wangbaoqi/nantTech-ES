import Queue from "@/internals/queue"



export type PromiseState = {
  type: 'PROMISE',
  done: Boolean,
  notify: Boolean,
  parent: Boolean,
  reactions: Queue,
  rejection: boolean,
  state: 'PENDING' | 'FULFILLED' | 'REJECTED',
  value: any,
  facade?: PromiseState | null
}


