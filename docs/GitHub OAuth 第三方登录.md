## GitHub OAuth 第三方登录

第三方登录的关键知识点就是 OAuth2.0 . 第三方登录,实质就是 OAuth 授权 . OAuth 是一个开放标准,允许用户让第三方应用访问某一个网站的资源,而不需要提供账号和密码.

总体就是:myapp <===> user <===> github

授权的总体流程

- 用户进入到我的网站,我想要获取到用户的 GitHub 信息
- 跳转到 GitHub 授权页面,然后问用户是否允许我获得他的信息,授予权限
- 同意,我的网站会获得 GitHub 发回的一个授权码,使用该授权码向 GitHub 申请一个令牌
- GitHub 授权码进行验证,没问题就会返回一个令牌(这个令牌只在短时间内有效)
- 我的网站获得令牌,然后向 GitHub 的 user 发起请求
- GitHub 验证令牌,没问题用户信息就返回过来了
- 我们通过返回的用户信息然后创建一个用户,并生成 token 返回给 client
- 然后根据 token 进行登录验证,来保持登录

> 授权登录一次之后就不用再次授权了,除非在 github app 中清除授权记录

## 应用登记

一个应用要求 OAuth 授权,必须先到对方网站登记,让对方知道是谁在请求。

所以,你要先去 GitHub 登记一下。当然,我已经登记过了,你使用我的登记信息也可以,但为了完整走一遍流程,还是建议大家自己登记。这是免费的。

user => settings => Developer settings

![](https://raw.githubusercontent.com/easterCat/img-package/master/img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-11-05%20%E4%B8%8B%E5%8D%885.11.39.png)

![](https://raw.githubusercontent.com/easterCat/img-package/master/img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-11-05%20%E4%B8%8B%E5%8D%881.19.09.png)
提交表单以后,GitHub 应该会返回客户端 ID（client ID）和客户端密钥（client secret）,这就是应用的身份识别码。
![](https://raw.githubusercontent.com/easterCat/img-package/master/img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-11-05%20%E4%B8%8B%E5%8D%881.21.37.png)

## webhook 通知

现在进行 oauth 应用创建的时候需要添加一个 webhook,这个就是 github 的一个通知系统,有更改的时候就会进行接口请求.现在创建 github app 强制要配置这个.
![](https://raw.githubusercontent.com/easterCat/img-package/master/img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-11-05%20%E4%B8%8B%E5%8D%884.25.28.png)

## 页面请求

首先在网站上加一个按钮

![](https://raw.githubusercontent.com/easterCat/img-package/master/img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-11-05%20%E4%B8%8B%E5%8D%881.20.13.png)

```
<Button type="primary" icon="github" size="large" onClick={this.login}>
    Github登录
</Button>


//handle
  public login() {
    const CLIENT_ID = "Iv1.59ce080xxxxx";
    const REDIRECT_URL = "ff852c46bxxxxx";
    const url = "https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID + `&client_secret=${REDIRECT_URL}`;
    window.location.href = url;
  }
```

点击按钮进入到授权页面
![](https://raw.githubusercontent.com/easterCat/img-package/master/img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-11-05%20%E4%B8%8B%E5%8D%881.31.31.png)

授权之后就去去请求当前应用在 github 保存的回调接口 ===> User authorization callback URL: http://localhost:6776/api/user/oauth

## 实现 oauth 接口

用户同意授权,GitHub 就会跳转到 User authorization callback URL 指定的跳转网址,并且带上授权码,跳转回来的 URL 就是下面的样子。

http://localhost:6776/api/user/oauth?code=df9da5bfca34bff19f2e

通过 query 拿到 code,这个就是授权码.

后端使用的是 nest.js 实现 , 之后的请求都使用后端实现.

```
  @Get('/oauth')
  @Redirect('/', 301)
  async githubOauth(@Query() queryData: { code: string }) {
    const ClientID = 'Iv1.59ce08xxxx';
    const ClientSecret = 'ff852c46bxxxxx';
    const config = {
      method: 'post',
      uri:
        'http://github.com/login/oauth/access_token?' +
        `client_id=${ClientID}&` +
        `client_secret=${ClientSecret}&` +
        `code=${queryData.code}`,
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    };
    const result: string = (await asyncRequest(config)) as string; //发起请求,拿到token
    }
  }


function asyncRequest(config) {
  return new Promise((resolve, reject) => {
    request(config)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}
```

拿到 token 之后我们可以通过 token 获取用户信息

```
    const parseResult = JSON.parse(result);
    const githubConfig = {
      method: 'get',
      uri: `https://api.github.com/user`,
      headers: {
        Authorization: `token ${parseResult.access_token}`,
        'User-Agent': 'easterCat',
      },
    };
    const user: string = (await asyncRequest(githubConfig)) as string; //获取用户信息
    const parseUser = JSON.parse(user);
```

获取到用户信息`{"login":"easterCat"....."created_at":"2016-07-13T07:24:06Z","updated_at":"2019-10-25T05:26:34Z"}`之后,处理用户信息

我们将需要的数据创建一个新用户

```
      await this.userService.create({
        login: parseUser.login,
        avatarUrl: parseUser.avatar_url,
        name: parseUser.name,
        createdAt: parseUser.created_at,
        updatedAt: parseUser.updated_at,
      }); // 创建新用户

      await this.sessionService.create({
        token: loginStatus,
        createAt: +Date.now(),
        name: parseUser.name,
      }); //创建session
```

然后之前 get 请求下添加了跳转 redirect,此时传入跳转接口

```
return { url: `/logged?name=${parseUser.name}` };
```

## 验证登录

前端进行的 ajax 请求开启 withCredentials , 将 cookie 进行携带.

前端使用的使用 next.js 进行的 react 开发.后端会将页面跳转到 logged 页面.

```
  public async componentDidMount() {
    const parsed = queryString.parse(window.location.search);
    const result: any = await this.props.login({ name: parsed.name });
    Cookies.set("ptg-token", result.token);

    this.setState({
      loginStatus: true,
      loading: true
    });
  }
```

当前页面进行登录接口请求,并将 token 保存到 cookie 中.

![](https://raw.githubusercontent.com/easterCat/img-package/master/img/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-11-05%20%E4%B8%8B%E5%8D%882.00.17.png)

之后的持久化登录就在应用初始阶段请求后端/logged 接口,后端会从请求中的 cookie 中拿到 token,然后对 session 进行判断.

## doc

- [GitHub OAuth 第三方登录示例教程](http://www.ruanyifeng.com/blog/2019/04/github-oauth.html)
- [授权 OAuth 应用](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/)
- [REST API 第 3 版](https://developer.github.com/v3/)
- [webhook 小试水（无需外网服务器）](https://www.jianshu.com/p/55209f1031e8)
