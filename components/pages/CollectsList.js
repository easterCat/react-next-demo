import React, { Fragment } from 'react';
import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    fadeIn: {
        animationName: fadeIn,
        animationDuration: '1s',
    },
});

// bing每日壁纸 https://github.com/xCss/bing
export default function CollectsList(props) {
    const { collects } = props;
    return (
        <Fragment>
            <ul className="cards">
                {collects &&
                    collects.map((item, index) => {
                        return (
                            <li key={item.id} className={`${css(styles.fadeIn)} cards__item`}>
                                <div className="card">
                                    <div className="card__image">
                                        <img src={`https://bing.ioliu.cn/v1?d=${index}&w=640&h=480`} />
                                    </div>
                                    <div className="card__content">
                                        <div className="card__title">{item.collectName}</div>
                                        <p className="card__text">{item.description}asdasd. </p>
                                        <button className="btn btn--block card__btn">查看详情</button>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
            </ul>
        </Fragment>
    );
}
