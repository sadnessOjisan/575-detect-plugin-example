# 575-detect-plugin-example

これは [クソアプリ Advent Calendar 2019](https://qiita.com/advent-calendar/2019/kuso-app)の 19 日目の記事である、[ビルド時に俳句を読めるプラグイン](https://qiita.com/sadnessOjisan/98619eaaef1da8d6545a) のために開発されたものです

## 使い方

babel-plugin の動作を確認

```zsh
$ yarn build
> document childNodes document
```

eslint-plugin の動作を確認

```zsh
$ yarn lint
>   9:9  error  俳句を検知しました. => document childNodes document  detect-haiku/forbid_haiku
```
