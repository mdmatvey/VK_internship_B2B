import { makeAutoObservable } from 'mobx'

export default class BookingFormStore {
  constructor () {
    this.tower = ''
    this.floor = ''
    this.intercom = ''
    this.date = ''
    this.time = ''
    this.comment = ''
    makeAutoObservable(this)
  }

  setTower (tower) {
    this.tower = tower 
  }

  setFloor (floor) {
    this.floor = floor 
  }

  setIntercom (intercom) {
    this.intercom = intercom 
  }

  setDate (date) {
    this.date = date 
  }

  setTime (time) {
    this.time = time 
  }

  setComment (comment) {
    this.comment = comment 
  }

  getTower () {
    return this.tower
  }

  getFloor () {
    return this.floor
  }

  getIntercom () {
    return this.intercom
  }

  getDate () {
    return this.date
  }

  getTime () {
    return this.time
  }

  getComment () {
    return this.comment
  }
}
