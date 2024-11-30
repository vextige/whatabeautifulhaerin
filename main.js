//선질이가 만듦
//선질이가 만듦

//선질이가 만듦

//선질이가 만듦





const set_id = set_idx;
const user_id = c_u;
const class_id = class_idx2;
let xpath = "/html/body/div[1]/div[3]/div/div/div/div[2]";
let result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerText;
const card = Number(result.match(/\d+/g).join('')) + 1;
const t = ['암기', '리콜', '스펠']
async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startProcess() {
    while (true) {
        for (let i = 1; i <= 3; i++) {
            const url = "https://www.classcard.net/ViewSetAsync/resetAllLog";
            let payload = `set_idx=${set_id}&activity=${i}&user_idx=${user_id}&view_cnt=${card}&class_idx=${class_id}`;

            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    },
                    body: payload
                });

                if (!response.ok) {
                    throw new Error("API 요청에 실패했습니다.");
                }

                const data = await response.json();
                console.log(t[i-1]+" 완료", data);
            } catch (error) {
                console.error("오류 발생:", error);
            }

            // 각 요청마다 1초 딜레이 추가
            await delay(1000);
        }
    }
}

startProcess();
