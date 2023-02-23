import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { memo } from 'react'
import { Context } from '../../App'

function TraiNghia({ styles }) {
    const context = useContext(Context)

    useEffect(() => {
        context.setType('trai nghia')
        if (context.word !== '') {
            context.setResultList([])
            context.infoText.style.color = "#000";
            context.loadingIcon.classList.add(styles.display)
            context.loadingText.innerHTML = 'Loading...'

            axios.get(`https://api.datamuse.com/words?rel_ant=${context.word}&qe=rel_ant&md=dp`)
                .then(response => {
                    const result = response.data
                    context.loadingIcon.classList.remove(context.loadingIcon.classList.remove(styles.display))
                    context.loadingText.innerHTML = ''

                    if (result.length === 0) {
                        context.infoText.innerHTML = `Không thể tìm thấy từ trái nghĩa với <span>"${context.word}"</span>. Mời nhập lại. `
                    } else {
                        context.infoText.innerHTML = `Các từ trái nghĩa tìm được:`

                        context.setResultList(result.map(res => {
                            let definition = ''
                            if (res.defs === undefined)
                                definition = 'undefined'
                            else if (res.defs.length > 1)
                                for (let j = 0; j < res.defs.length; j++) {
                                    definition += res.defs[j] + `; \n`
                                }
                            else {
                                definition = res.defs[0]
                            }
                            return (
                                <li key={res.word} className={styles.result_li}>
                                    <div>
                                        <a className={styles.result_word}>{res.word}</a>
                                    </div>
                                    <span className={styles.result_span}>{definition}</span>
                                </li>
                            )
                        }))
                    }
                })
                .catch((e) => {
                    context.infoText.innerHTML = 'Failed to load data from API'
                    alert('Failed to load data from API')
                    console.log(e)

                })
        }

    }, [context.searchCheck])

    return (
        <>
            {context.resultList}
        </>
    )
}

export default memo(TraiNghia)