import { Injectable, ResolvedReflectiveFactory } from '@angular/core';
import { QAPaper, QABlock } from '../models/QAPaper.model'

@Injectable({
    providedIn: 'root'
})
export class QAService {

    constructor() { }

    getNewQPaper (): QAPaper {
        return new QAPaper()
    }

    getNewQABlock(): QABlock {
        return new QABlock()
    }

    saveQAPaper(qaPaper: QAPaper) {
        return new Promise((resolve, reject) => {
            try {
                const SAVED_PAPERS = "SAVED_PAPERS"
                // for now, save the qaPaper in localstorage
                let savedPapers = JSON.parse(window.localStorage.getItem(SAVED_PAPERS) || '{}')
                savedPapers[qaPaper.id] = qaPaper
                window.localStorage.setItem(SAVED_PAPERS, JSON.stringify(savedPapers))
                resolve('Successfully saved in localStorage ...')
            }
            catch(err) {
                console.log(err)
                reject('Error!!! Could not save the qpaper ...')
            }
        })
    }

    getMyQAPapers():Promise<Array<QAPaper>> {
        return new Promise((resolve, reject) => {
            try {
                const SAVED_PAPERS = "SAVED_PAPERS"
                // for now, save the qaPaper in localstorage
                let savedPapers = JSON.parse(window.localStorage.getItem(SAVED_PAPERS) || '{}')
                resolve(Object.values(savedPapers))
            }
            catch(err) {
                console.log(err)
                reject('Error!!! Could not save the qpaper ...')
            }
        })
    }

    getSavedQPaper(id: string) {
        return new Promise((resolve, reject) => {
            // if ocal, get from localstorage
            if (id.startsWith('_LOCAL_QPaper_')) {
                const SAVED_PAPERS = "SAVED_PAPERS"
                // for now, save the qaPaper in localstorage
                let savedPapers = JSON.parse(window.localStorage.getItem(SAVED_PAPERS) || '{}')
                // savedPapers[qaPaper.id] = qaPaper
                resolve(savedPapers[id])
            }
            // else get from API DB
        })
    }
}
