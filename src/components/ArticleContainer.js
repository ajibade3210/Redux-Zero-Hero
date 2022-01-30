import React from 'react'
import {procastinate, writeArticle} from '../redux/articles/articleAction'
import {connect} from 'react-redux'

function ArticleContainer (props) {
    return (
        <div>
            <div className="article_wrapper" style={{display:'flex', justifyContent:'center',margin:'10px', alignContent:'center'}}>
            <div style={{marginRight:'50px'}}>
            <h1>Write Kick Ass Article: {props.writtenArticle}</h1>
            <button onClick={props.writeArticle}>Write</button>
            </div>
            <div>
            <h1>Proscatinate: {props.procastination}</h1>
            <button onClick={props.procastinate}>Proscatinate</button>
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        writtenArticle: state.article.writtenArticle,
        procastination: state.article.procastination
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        writeArticle: ()=> dispatch(writeArticle()),
        procastinate: ()=> dispatch(procastinate())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ArticleContainer)