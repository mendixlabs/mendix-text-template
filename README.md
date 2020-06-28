[![Apache License](https://img.shields.io/badge/license-Apache%202.0-orange.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Dependencies](https://david-dm.org/JelteMX/mendix-text-template.svg)]([https://david-dm.org/JelteMX/mendix-text-template](https://david-dm.org/JelteMX/mendix-text-template))
[![DevDependencies](https://david-dm.org/JelteMX/mendix-text-template/dev-status.svg)]([https://david-dm.org/JelteMX/mendix-text-template?type=dev](https://david-dm.org/JelteMX/mendix-text-template?type=dev))
[![Support](https://img.shields.io/badge/Support-Community%20(no%20active%20support)-orange.svg)](https://docs.mendix.com/developerportal/app-store/app-store-content-support)
[![Studio](https://img.shields.io/badge/Studio%20version-8.6.4%2B-blue.svg)](https://appstore.home.mendix.com/link/modeler/)
[![GitHub release](https://img.shields.io/github/release/JelteMX/mendix-text-template)](https://github.com/JelteMX/mendix-text-template/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/JelteMX/mendix-text-template)](https://github.com/JelteMX/mendix-text-template/issues)
[![Available](https://img.shields.io/badge/Test%20Project-available-green.svg)](https://github.com/JelteMX/widget-test-projects)

# Mendix Text Template

Render Markdown/HTML from a Text template. As powerful as the HTMLSnippet/Formatstring widget, but with more flexibility.

This uses the [react-markdown](https://github.com/rexxars/react-markdown) library (MIT License) and [react-shortcodes](https://github.com/djm/remark-shortcodes) library (MIT License)

![logo](/assets/AppStoreIcon.png)

> See [test-project](https://markdownelement-te-sandbox.mxapps.io/) for a live demo!

![preview](/assets/template2.png)

Tested in the following Browsers:

- IE11 / Edge
- Chrome, Firefox, Safari
- Should work on Mobile Web

> This widget is built in Mendix 8.6.4. Please report if this widget does not work in later versions

## Features

- Render Markdown (string) as HTML. Markdown is [Github Flavored Markdown](https://guides.github.com/features/mastering-markdown/)
- Render HTML from a text template. It will try to parse it as proper React elements.
- Use your standard text template in Mendix, where values from your Mendix objects are replaced by `{1}` etc
- Want to use static/dynamic images? You can get the direct url in your template using the `$$[placeholder]$$` strings
- Using a file? You can get a direct url to it with the `$$file$$` string
- Want to go crazier? You can add Optional Mendix content inside your text template component and use the `[[ content]]` shortcode to render it.

## TODO

- Currently the `[[ shortcode ]]` template (everything between `[[` and `]]`) is reserved for future shortcode support. You can think of something like `[[ youtube id="" ]]` for a YouTube embed. Any shortcode that is not recognized is not rendered.
- There might be useful other strings (`$$key$$`) added later. Currently I am only using this for images and a file
- File is only a single one, because of a bug in Mendix Studio 8.6.4 (cannot create a list of files like images)
- It always renders a container with the class name. This could be made optional (although not ideal)
- Mendix Studio support will be added later

## What is it __NOT__?

Although this is very powerful, this widget does __NOT__ support inline scripts like you can do with the HTMLSnippet/Javascript snippet. The reason for that is simple: It should not be done in the Mendix page itself. I might add a `[[ script ]]` shortcode later where you can load a script from an external source.

By default HTML is escaped and should not render. You can switch this off. If you happen to find an XSS vulnerability (e.g. you can somehow get `alert(1)` working), please contact me and I will see how we can prevent this!

## Usage

- Place the Text Template widget on your page (doesn't need a context like dataview)
- Define your template. If you have a context, you can define Parameters. These parameters can then be used in your template with brackets (`{1}` etc). __Note: Because Mendix uses the brackets, you cannot use them for other purposes in your template!__
- Want to use HTML? `HTML -> Escape HTML: No`. Use with caution. Also, for some elements (like in the Test-project with an SVG) you might want to surround them with a `<div>` element
- Want to render the optional Mendix content? Use the `[[ content ]]` shortcode in your template
- Misc settings may or may not be usefull. They will add certain `data-` tags to all generated elements. Also, if there are certain elements prohibited, you can disable them (This is a list like `image,strong`). When disabling certain elements, you can choose whether or not to show them (if you want to, set **Unwrap disallowed** to Yes)
- This element has Conditional Visibility built-in

## Test project

The Test-project can be downloaded here: [https://github.com/JelteMX/widget-test-projects#text-template](https://github.com/JelteMX/widget-test-projects#text-template)

## Issues, suggestions and feature requests

Please report your issues [here](https://github.com/JelteMX/mendix-text-template/issues)

## License

Apache 2
