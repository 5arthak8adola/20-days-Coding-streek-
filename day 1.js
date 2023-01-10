const { shiftTimeBy } = require('time-fast-forward')
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)


shiftTimeBy(-1 * 20 * 24 * 60 * 60 * 1000);

let startOfDay = dayjs.utc().startOf('day').toDate()
let startOfPreviousDay = dayjs.utc().startOf('day').subtract(1, 'day').toDate()

const actionTrackers = {}


let i = 0
while (i < 22) {
  trackAction({ actionId: 'vote', userId: 'bar' })
  i++
}


shiftTimeBy((1 * 24 * 60 * 60 * 1000) + 220);

startOfDay = dayjs.utc().startOf('day').toDate()
startOfPreviousDay = dayjs.utc().startOf('day').subtract(1, 'day').toDate()


i = 0
while (i < 22) {
  trackAction({ actionId: 'vote', userId: 'bar' })
  i++
}


shiftTimeBy((3 * 24 * 60 * 60 * 1000) + 220);

startOfDay = dayjs.utc().startOf('day').toDate()
startOfPreviousDay = dayjs.utc().startOf('day').subtract(1, 'day').toDate()


i = 0
while (i < 22) {
  trackAction({ actionId: 'vote', userId: 'bar' })
  i++
}

function trackAction({ actionId, userId, dailyGoal = 10 }) {
  const actionUsersTracker = actionTrackers[actionId] = actionTrackers[actionId] ?? {}
  const actionUserTracker = actionUsersTracker[userId] = actionUsersTracker[userId] ?? {}

  if (!actionUserTracker.lastDate) {
    actionUserTracker.lastDate = new Date
    actionUserTracker.actionCount = 1
    actionUserTracker.streakCount = 0
  } else {
    if (actionUserTracker.lastDate < startOfDay) {
      if (actionUserTracker.lastDate < startOfPreviousDay) }