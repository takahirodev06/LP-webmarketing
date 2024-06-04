export default function Home() {
    const imgproblem = "/assets/11829_color.png"
    const imgsloved = "/assets/11813_color.png"
    const imgsend = "/assets/icon_send.png"
    const imgtower = "/assets/parisky.png"


    const onSubmit = async () => {

    }
    return (
        <main className="" id="pgtop">
            <section className="fv">
                <p>在仏の事業者様へ</p>
                <h1><span className="txtrd">WEB</span>を活用して <br/>
                    あなたの<span className="txtbl">ビジネスを</span> <br/>
                    <span className="txtrd">もっと</span>伸ばす <br/>
                    <span className="txtbl"> デジタルパートナー</span></h1>
                <div className="hexagon"></div>
            </section>
            <section className="lp-sections cta01">
                <div className="cta01_box">
                    <p>まずはお悩みを聞かせてください</p>
                    <p>初回から出し惜しみせずお答えします。</p>
                    <a href="#contact">1ｈ無料相談</a>
                </div>
                <div className="cta01_box">
                    <p>メールまたはお問い合わせフォームから</p>
                    <a href="#contact">サポートお申込み</a>
                </div>

            </section>
            <section className="lp-sections problems" id={"problems"}>
                <p>宣伝活動をしたいけど、、、</p>
                <p>知見が足りない、、、</p>
                <p>高い費用は使えない、、、</p>
                <p>調べる時間がない、、、</p>
                <p>お問い合わせや予約管理、<br/>
                    在庫管理をもっと簡単にしたい、、、</p>
                <img src={imgproblem}></img>
            </section>
            <p className="sokode">そこで</p>
            <section className="lp-sections strength" id={"strength"}>
                <p>プランに合わせた <br/>
                    コストで運用可能 <br/>
                    <span>100€~ / 月</span>
                </p>
                <p>初回無料の戦略相談</p>
                <p>２か月のお試し運用 <br/>
                    (データ分析＋戦略実施)</p>
            </section>
            <section className="lp-sections reason side-pdd" id={"reason"}>
                <h2> Webマーケティングを導入するメリット</h2>
              <p>
                インターネットを閲覧している <span>全世界の人々</span>に <span>一斉に</span>アピールできることです。
                ネット上では興味を持つ人々が集まって広告を見てくれるため、
                <span>見込み客に効果的</span>見込み客に効果的にアプローチすることが可能です。
                また、Webマーケティングの歴史はまだ浅く、
                苦手意識があり参入できていない企業も多い現状です。
                こうした企業がWeb戦略を取り入れることで大きな効果が期待できます。
                近年伸びているサービスや店舗は必ずWebを<span>巧みに利用</span>しています。
                しかし、何も知らない状況から調べて実行できるような
                時間的・コスト的な余裕がある企業は多くありません。
                そこで、企業が自身の <span>スケールに合わせて</span>Webに関する相談を行い、
                代わりに専門のWebマーケターに手を動かしてもらうことで、
                <span>小さなコスト</span>でビジネスを成長させることができます。</p>
            </section>
            <section className="lp-sections service side-pdd" id={"service"}>
                <h2>サービス内容</h2>
                <div><h3>ホームページ・LP・キャンペーンページ作成</h3>
                    <p>企業様の製品、サービス、店舗の魅力を伝えるウェブサイトを作成・運営します。
                        顧客が御社に興味を持った時、知りたい情報が見やすくまとまったサイトがあると購買行動に繋がります。
                        ウェブサイトを持っていることで会社に対しての信頼も高まり、ブランドの雰囲気を直接体感してもらうことができます。
                        シーズン限定のキャンペーンページや、ホームページ改修もぜひご相談ください。
                    </p></div>

                <div><h3>SEO対策</h3>
                    <p>グーグル検索結果に上位表示されるような施策を行います。
                        グーグル検索順位が高いと、ユーザーの目に触れる機会が数倍に増え認知が高まります。
                        どの企業も力を入れている分野でウェブマーケティングの基本です。</p>
                </div>
                <div><h3>MEO対策</h3>
                    <p>グーグルマップで検索されたときに上位表示される施策を行います。
                        実店舗がある業態ではSEOよりも重視されることもある指標です。
                        まだ認知のない顧客にも、マップから見つけてもらうと来店率が上がります。
                    </p></div>
                <div><h3>既存ウェブサイトの解析・更新・改善</h3>
                    <p>企業様が現在運営されているサイトの分析を行い、
                        弱点を改善することでサイトの有効性を高めます。</p>

                    <p>サイトリニューアルを実施することで新しいイメージをつくりだし、既存のサービスや商品を広めることができます。
                    サイトに最新の情報があると会社の信頼性もあがります。</p>

                </div>
                <div><h3>SNS運用コンテンツ作成・原稿作成</h3>
                    <p>近年______ているSNSを効果的に運用することは大きな広告効果がきたいさて＝</p></div>

                <div><h3>広告代理運用</h3>
                    <p>texttexttexttexttexttexttexttexttexttext</p></div>

                <div><h3>在庫管理システム、アプリ開発</h3>
                    <p>企業様の業務で起きている問題をITで解決できるかもしれません。ご相談ください。</p></div>
            </section>
            <section className="lp-sections flow side-pdd" id={"flow"}>
                <h2>サポートの流れ</h2>
                <div className={"flow_i"}><h3><span>1</span>まずはお悩みを教えてください</h3>
                    <p>オンラインまたは対面にてお話を伺い、webマーケティング施策が必要なのか、どんな手法が有効か一緒に考えましょう。初回から出し惜しみせずお答えします。</p>
                </div>
                <div className={"flow_i"}><h3><span>2</span>データ収集・分析</h3>
                    <p>webマーケティング施策は現状のデータを集めるところから始まります。実際の数字を分析し、緊急性が高い箇所や伸びしろがありそうな施策を手案します。</p>
                </div>
                <div className={"flow_i"}><h3><span>3</span>戦略決定</h3>
                    <p>とるべき方針が決まったら、実施する方法、期間、規模を企業様と決定します。</p></div>
                <div className={"flow_i"}><h3><span>4</span> コンテンツ作成、公開</h3>
                    <p>広告に使用する画像や文章を作成します。魅力的な広告をwebの適切な場所に設置することで将来のクライアントに届きます。</p>
                </div>
                <div className={"flow_i"}><h3><span>5</span> データ分析、調整</h3>
                    <p>これまでの広告の効果を測定して、調整を繰り返すことで効果的なマーケティングになります。</p></div>
                <div className={"flow_i"}><h3><span>6</span>継続、または別の施策へ</h3>
                    <p>効果にご満足いただけた場合は。契約を更新して継続的な集客をしていきましょう。
                        これ以上の効果が期待できない場合は施策の見直しをし、別の手法を探します。</p></div>
            </section>
            <section className="lp-sections message side-pdd" id={"message"}>
                <h2>フランスで頑張る <br/>
                    日本人を応援したい。</h2>
                <p> フランスでは、日本文化や日本製品が幅広い層に愛され、
                    その人気は単なるブームにとどまらず、今も市場は拡大し続けています。 </p>
                <p> ここパリでもたくさんの企業が様々なサービスを展開し、
                    日本文化の素晴らしさを日々市民に伝えています。</p>
                <p> しかし、そのような企業をサポートできる環境はまだパリには少ないと感じます。</p>
                <p> 私は、そんな企業がもっとITを活用することで、
                    今の2倍、10倍の顧客にリーチでき、
                    皆様のビジネスの目標を達成できる可能性があると信じています。</p>
            </section>
            <section className="lp-sections contact side-pdd" id="contact">
                <h2>お申込み</h2>
                <form action="post">
                    <input type="text" placeholder={"企業さま名"}/>
                    <input type="text" placeholder={"担当者さま氏名"}/>
                    <input type="email" placeholder={"メールアドレス"}/>
                    <textarea placeholder={"メッセージ本文"}/>
                    <button type="submit"><img src={imgsend} alt=""/> 送信する</button>
                </form>
            </section>
            <footer>
                <p>ヤマダウェブクリエイション </p>
                <p>ウェブマーケ支援サービス</p>
            </footer>
        </main>
    );
}