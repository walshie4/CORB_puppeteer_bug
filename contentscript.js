/*
* Copyright (c) 2011 The Chromium Authors. All rights reserved.
* Use of this source code is governed by a BSD-style license that can be
* found in the LICENSE file.
*/

/**
 * Performs an XMLHttpRequest to Twitter's API to get trending topics.
 *
 * @param callback Function If the response from fetching url has a
 *     HTTP status of 200, this function is called with a JSON decoded
 *     response.  Otherwise, this function is called with null.
 */
function fetchTwitterFeed() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(data) {
    console.log(data);
    console.log(data.responseText);
  }
  var url = 'https://google.com';
  xhr.open('GET', url, true);
  xhr.send();
};

setInterval(fetchTwitterFeed, 1000);
