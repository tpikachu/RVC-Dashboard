# Change Log

## [2.0.0] 2022-03-09

### Update v2.0.0

### Added components

- Each page now has a folder of its own, containing `index.js` (for the page itself) and a folder in which all cards have been made as a separate component which take props.
- Added sidebar content which is used for both the standard sidebar and the responsive sidebar drawer.
- Inside `Sidebar` folder in `components`, there is `index.js`, which is the actual sidebar, and `SidebarResponsive.js` which is a button that opens the sidebar drawer.

### Updated dependencies

```
@emotion/cache                       11.4.0         →         11.7.1
@emotion/react                       11.4.1         →         11.8.1
@emotion/styled                      11.3.0         →         11.8.1
react-router-dom                     5.2.0          →         6.2.1
stylis                               4.0.10         →         4.0.13
```

### Warning

There is a warnings related to the stylis-plugin-rtl dependency that won't affect on the behavior of the product its something with the library itself.

## [1.0.2] 2021-09-13

### Update v1.0.2

### Bug fixing

- Removed console errors

### Updated dependencies

```
node-sass                            5.0.0          →         7.0.1
react-scripts                        4.0.3          →         5.0.0
```

## [1.0.1] 2021-09-13

### Update v1.0.1

- Added RTL Page

### Added dependencies

```
@emotion/cache                                                11.4.0
react-github-btn                                              1.2.1
```

### Updated dependencies

```
stylis                               4.0.10         →         4.0.13
stylis-plugin-rtl                    2.1.0          →         2.1.14
```

## [1.0.0] 2021-08-20

### Original Release

- Added Chakra UI as base framework