import create from "zustand";
import {devtools, persist} from 'zustand/middleware'


let peopleStore = (set) => ({
    people: ['John Doe', 'Jane Doe'],
    addPerson: (person) => set((state) =>({people: [...state.people, person]})),
    deletePerson: (person) => set((state) => ({people: state.people.filter((person, index) => {
        return index === 0 ? false : true
    })})),
    darkMode: true,
    toggleTheme: () => set((state) => ({darkMode: !state.darkMode}))
})

let settingStore = (set) => ({
    darkMode: true,
    toggleTheme: () => set((state) => ({darkMode: !state.darkMode}))
})


let store = persist(settingStore, {name: 'user_settings'})

const usePeopleStore = create(peopleStore)
const useSettingStore = create(settingStore)

export {usePeopleStore, useSettingStore}