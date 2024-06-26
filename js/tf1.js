const url1 = "https://live-tf1-hls.cdn-0.diff.tf1.fr/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaXAiOiI4MC4xNS4yOS4zNiIsImNtY2QiOiIiLCJleHAiOjE3MTI0OTY1MTYsImdpZCI6ImIxOTU3YTFhLTUyMzktNGYwNi05NTU4LTVmZmViNDFlOTE4MiIsImlhdCI6MTcxMjQ4MjExNiwiaXNzIjoiZGVsaXZlcnkiLCJtYXhiIjoyMDAwMDAwLCJzdGVtIjoiL291dC92MS83ODA1NDJmNTE2ZjE0M2ZjOGFkOWJmMTQ2MjIzMTZlNy90ZjEtY21hZiIsInN1YiI6ImIxOTU3YTFhLTUyMzktNGYwNi05NTU4LTVmZmViNDFlOTE4MiJ9.SmGCnMLWF9LXHCjEC6z6PLvzrAQtlkGSQRD-xkV2SKU/out/v1/780542f516f143fc8ad9bf14622316e7/tf1-cmaf/index.m3u8";
const url2 = "http://azrotv.com/pyr/msg/geo/playlist.m3u8";

function checkURL(url) {
  return fetch(url).
  then(response => {
    if (response.ok) {
      return true; // URL is reachable
    } else {
      return false; // URL is not reachable
    }
  }).
  catch(error => {
    console.error('Error checking URL:', error);
    return false; // Error occurred, URL is not reachable
  });
}

checkURL(url1).
then(isOnline => {
  const playlist = {
    playlist: [{
      file: isOnline ? url1 : url2 }],

    allowfullscreen: 'true',
    skin: "",
    width: "100%",
    height: "100%",
    stretching: 'exactfit',
    androidhls: 'true',
    hlshtml: true,
    primary: "html5",
    autostart: "true" };


  jwplayer("Plyr3").setup(playlist);
});