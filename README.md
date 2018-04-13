# Vox Preload

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/89d2db570f0d4f3ca09a5ec0585d6d12)](https://app.codacy.com/app/neliofrazao/voxPreload?utm_source=github.com&utm_medium=referral&utm_content=vox-tecnologia/voxPreload&utm_campaign=badger)

## Loading component for angular 5+ project

*test a live exemple here: https://vox-tecnologia.github.io/voxPreload/*
>### installing:
```
npm i vox-preload --save
```
>### components:
we have three types of loading:
+ A global loading that appears over the application
+ A modal with a loading that pops up when the request is made
+ A local loading that appears under a designated input field

> ### usage:
import the module that you need inside your application's module and the service inside the service with the request that will trigger the loading

```typescript
import {LoadingGlobalModule, LoadingModalModule, LoadingInputModule} from 'vox-preload';
import {LoadingGlobalService, LoadingModalService, LoadingInputService} from 'vox-preload';
```
##### usually "modal" and "global" will be imported inside the main module of the application, but "input" will be imported inside the componet related to it .
***
call the service inside the method that make the request:
+ calls the method "show" to start and "hide" to stop
``` typescript
public makeRequest(){
    loadingGlobalService.show();
    genericService.get(someUrl)
        .then(response => {
        loadingGlobalService.hide();
        })
        .catch( error => {
            loadingGlobalService.hide();
        })
}
```
***
> ### LoadingInputService
+ receives an optional string as argument on 'show' method, this alter the default loading message.
```Typescript
loadingInputService.show('optional string message')
```
+ also receives two arguments ond the 'hide' method, the first one refers to either the succes or error of the request adn it is required, the second is a optional message object.
```typescript
loadingInputService.hide('error', {error: 'optional string message')}
loadingInputService.hide('success', {success: 'optional string message')}
```
> ### LoadingModalService
+ receives an optional string as argument on 'show' method, this alter the default loading message.
```Typescript
loadingModalService.show('optional string message')
```
#### *LoadingGlobalService doesn't receive any argument*

![global loading exemple](./src/assets/global_loading.png) Global loading exemple

![modal loading exemple](./src/assets/modal_loading.png) Modal loading exemple

![input loading exemple](./src/assets/input_loading.png) Input loading exemple

![global loading exemple](./src/assets/input_response.png) Input response exemple