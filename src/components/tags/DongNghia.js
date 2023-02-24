import axios from 'axios'
import { useEffect } from 'react'
import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setType } from '../../actions/type'
import { setWord } from '../../actions/word'
import { setResultList } from '../../actions/resultList'
import { setSearchCheck } from '../../actions/searchCheck'
import { setInfoText } from '../../actions/infoText'
import { setLoading } from '../../actions/loading'


function DongNghia({ styles }) {
    const word = useSelector(state => state.word)
    const searchCheck = useSelector(state => state.searchCheck)
    const resultList = useSelector(state => state.resultList)

    const dispatch = useDispatch()

    useEffect(() => {
        if (word !== '') {
            dispatch(setResultList([]))
            dispatch(setLoading(true))

            axios.get(`https://api.datamuse.com/words?rel_syn=${word}&qe=rel_syn&md=dp`)
                .then(response => {
                    const result = response.data
                    // console.log(result);
                    dispatch(setLoading(false))


                    if (result.length === 0) {
                        dispatch(setInfoText(`Không thể tìm thấy từ đồng nghĩa với <span>"${word}"</span>. Mời nhập lại. `))
                    } else {
                        dispatch(setInfoText(`Các từ đồng nghĩa tìm được:`))

                        dispatch(setResultList(result.map(res => {
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
                                        <a
                                            className={styles.result_word}
                                            onClick={() => {

                                                dispatch(setWord(res.word))
                                                dispatch(setSearchCheck(!searchCheck))
                                            }}
                                        >{res.word}</a>
                                    </div>
                                    <span className={styles.result_span}>{definition}</span>
                                </li>
                            )
                        })))
                    }
                })
                .catch((e) => {
                    dispatch(setInfoText('Failed to load data from API'))
                    alert('Failed to load data from API')
                    console.log(e)


                })
        }
    }, [searchCheck])


    return (
        <>
            {resultList}
        </>
    )
}

export default memo(DongNghia)