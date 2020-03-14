import * as user from './user/user.action';
import * as articles from './articles/articles.action';

const all = {
    ...user,
    ...articles,
};

export default all;
