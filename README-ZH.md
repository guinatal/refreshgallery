# Phonegap Plugin Refresh Gallery

之所以写这个插件，是因为当你在安卓设备上保存一张新图片时，这张图片不会即时出现在图库中。而本插件将会解决这个问题。

## 使用

只需在config.xml中添加如下一行即可：

```xml
<plugin name="com.guinatal.refreshgallery" spec="https://github.com/guinatal/refreshgallery.git"/>
```

之后，你可以使用如下方法来刷新图库：

```javascript
refreshMedia.refresh(path);
```

## 示例

```javascript
window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fileSystem) {

  var fileTransfer = new FileTransfer();
  var uri = encodeURI("http://www.example.com/image");
  var path = fileSystem.root.toURL() + "appName/example.jpg";

  fileTransfer.download(
    uri,
    path,
    function(entry) {
      refreshMedia.refresh(path); // Refresh the image gallery
    },
    function(error) {
      console.log(error.source);
      console.log(error.target);
      console.log(error.code);
    },
    false,
    {
      headers: {
        "Authorization": "dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
      }
    }
  );

});
```

![Album](http://blog.guinatal.com/wp-content/uploads/2015/04/album.jpg)

## 贡献

 欢迎参与贡献。

## 其他语言

- [English](README.md)