/*

Fungsi Skrip: Duolingo Unlock Plus
Versi perangkat lunak: 6.192.0
Tautan unduhan: http://t.cn/A663Se6M
Penulis naskah: Lailaazmi 💞
Waktu pembaruan: 4 Des 2022
Umpan balik : twitter @nandhaazmi
Grup umpan balik TG: https://t.me/nandhaazmi
Grup TG: https://t.me/IDGratis
Pernyataan penggunaan: ⚠️ Skrip ini hanya untuk pembelajaran dan komunikasi, Tolong jangan cetak ulang dan jual! ⚠️

Surge - Loon
http-response ^https:\/\/dayone\.me\/api\/(users|v2\/users\/account-status)$ requires-body=1,max-size=0,script-path=scripts/dayone.js
#QuantumultX
^https:\/\/dayone\.me\/api\/(users|v2\/users\/account-status)$ url script-response-body dayone.js

MitM = dayone.me

Skrip ini ditulis oleh @nandhaazmi [Laila Azmi], harap jangan di ubah dan memposting ulang dimanapun.

*/

if ($response.statusCode == 200) {
        if ($request.url.endsWith("account-status")) {

            $done({body: JSON.stringify({
  "expirationDate": 1893427199000,
  "startDate": 1546272000000,
  "subscriptionPlan": "com.bloombuilt.dayoneios.subscription.premium.yearly_discounted_trial",
  "lastRenewalDate": 1546531200000,
  "subscriptionName": "premium",
  "bundleReason": "purchase",
  "cancellationDate": 0
} )});

        } else {
	     const bodyJson = JSON.parse($response.body);

	     bodyJson.featureBundle = {"bundleName":"premium","features":[{"name":"imagesPerEntry","limit":30,"canUpgrade":false},{"name":"printingDiscount","canUpgrade":false},{"name":"syncMac","canUpgrade":false},{"name":"prioritySupport","canUpgrade":false},{"name":"sync","canUpgrade":false},{"name":"journalLimit","limit":100,"canUpgrade":false},{"name":"audioPerEntry","limit":10,"canUpgrade":false}]};

	    $done({body: JSON.stringify(bodyJson)});
        }
} else {
	$done({});
}
