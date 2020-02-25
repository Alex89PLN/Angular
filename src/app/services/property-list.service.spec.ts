import { TestBed } from '@angular/core/testing';

import { PropertyListService } from './property-list.service';

describe('PropertyListService', () => {
  beforeEach(() => {
    localStorage.clear()
    localStorage.setItem('propertyList', JSON.stringify(new Array(5).fill('test')))
    TestBed.configureTestingModule({})});
  beforeAll(() => {
    localStorage.clear()
  })
  afterAll(() => {
    localStorage.clear()
  })
  it('should be created', () => {
    const service: PropertyListService = TestBed.get(PropertyListService);
    expect(service).toBeTruthy();
  });
  it('save list to local storage', () => {
    const service: PropertyListService = TestBed.get(PropertyListService);
    const list = new Array(5).fill('test')
    service.saveListToLocalStorage(list)
    const saved = (JSON.parse(localStorage.getItem('propertyList'))) as any[]
    expect(saved.length).toBe(list.length)
    const listFromService = service.loadPropertyListFromLocalStorage()
    expect(listFromService.length).toBe(list.length)
    expect(listFromService.length).toBe(saved.length)
  })
  it('add new property item', () => {
    const service: PropertyListService = TestBed.get(PropertyListService);
    const before = service.loadPropertyListFromLocalStorage()
    service.addItemToPropertyListLocalStorage('test')
    const after = service.loadPropertyListFromLocalStorage()
    expect(before.length + 1).toBe(after.length)
  })
  it('delete property', () => {
    const service: PropertyListService = TestBed.get(PropertyListService);
    const before = service.loadPropertyListFromLocalStorage()
    service.removeItemFromPropertyListLocalStorage(1)
    const after = service.loadPropertyListFromLocalStorage()
    expect(before.length).toBe(after.length + 1)
  })
  it('edit property', () => {
    const testValue = 'justTest'
    const testIndex = 1
    const service: PropertyListService = TestBed.get(PropertyListService);
    const before = service.loadPropertyListFromLocalStorage()
    service.editItemInPropertyList({ name: testValue, index: testIndex })
    // const before[testIndex]
    const after = service.loadPropertyListFromLocalStorage()
    expect(before[testIndex]).not.toBe(testValue)
    expect(after[testIndex]).toBe(testValue)
  })
});
