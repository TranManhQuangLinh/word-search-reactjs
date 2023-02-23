import axios from 'axios'
import { useContext, useEffect } from 'react'
import { memo } from 'react'
import { Context } from '../../App'

function DongAm({ styles }) {
    const context = useContext(Context)

    useEffect(() => {
        // console.log(context)
        if (context.word !== '') {
            context.setResultList([])
            context.setLoading(true)


            axios.get(`https://api.datamuse.com/words?sp=${context.word}&qe=sp&md=dp`)
                .then(response => {
                    const result = response.data
                    // console.log(result);
                    context.setLoading(false)


                    if (result.length === 0) {
                        context.setInfoText(`Không thể tìm thấy từ đồng âm với <span>"${context.word}"</span>. Mời nhập lại. `)
                    } else {
                        context.setInfoText(`Các từ đồng âm tìm được:`)

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
                    context.setInfoText('Failed to load data from API')
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

export default memo(DongAm)