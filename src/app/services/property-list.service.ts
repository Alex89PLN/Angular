import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyListService {
  private LCProperyList = 'propertyList'
  constructor() { }
  saveListToLocalStorage(list: string[]) {
    try {
      if (list && list.length) {
        localStorage.setItem(this.LCProperyList, JSON.stringify(list))
      } else {
        localStorage.clear()
      }

    } catch (error) {
      throw error
    }
  }
  loadPropertyListFromLocalStorage(): string[] {
    try {
      const list = (JSON.parse(localStorage.getItem(this.LCProperyList)) || []) as string[]
      return list
    } catch (error) {
      throw error
    }
  }
  addItemToPropertyListLocalStorage(item: string) {
    try {
      if (typeof item !== 'string') {
        throw new Error('addItemToPropertyListLocalStorage error')
      }
      const list = (JSON.parse(localStorage.getItem(this.LCProperyList)) || [])
      this.saveListToLocalStorage([...list, item])
    } catch (error) {
      throw error
    }
  }
  removeItemFromPropertyListLocalStorage(index: number) {
    try {
      const list = Array.from((JSON.parse(localStorage.getItem(this.LCProperyList)) || []) as string[])
      list.splice(index, 1)
      this.saveListToLocalStorage(list)
    } catch (error) {
      throw error
    }
  }
  editItemInPropertyList(data: { name: string, index: number }) {
    try {
      const { name, index } = data
      const list = JSON.parse(localStorage.getItem(this.LCProperyList))

      if (!list || !list.length || !list[index]) {
        throw new Error('editItemInPropertyList error')
      }
      list[index] = name
      this.saveListToLocalStorage(list)
    } catch (error) {
      throw error
    }

  }
}
