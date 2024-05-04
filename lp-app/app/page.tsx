import Image from "next/image";

export default function Home() {



    return (
        <main className=""  id="pgtop">
            <section className="lp-sections fv" >
                <p>在仏の事業者様へ</p>
                <h1> webを活用してあなたのビジネスをもっと伸ばすビジネスパートナー </h1>
            </section>
            <section className="lp-sections cta01">
                <p>まずはお悩みを聞かせてください</p>
                <p>初回から出し惜しみせずお答えします。</p>
                <a href="">1ｈ無料相談</a>
                <p>メールまたはお問い合わせフォームから</p>
                <a href="">サポートお申込み</a>
            </section>
            <section className="lp-sections problem">
                <p>宣伝活動をしたいけど、知見が足りない、、高い費用は使えない、、調べる時間がない、、</p>
                <p>問い合わせ、予約管理、在庫管理をもっと簡単にしたい、、</p>
            </section>
            <section className="lp-sections strength">
                <p>プランに合わせたコストで運用可能100€~ / 月</p>
                <p>初回無料の戦略相談</p>
                <p>２か月のお試し運用(データ分析＋戦略実施)</p>
            </section>
            <section className="lp-sections reason">
                <p>やるべき理由
                    Webマーケティングの最大のメリットは、インターネットを閲覧している全世界の人々に一斉にアピールできることです。ネット上では興味を持つ人々が集まって広告を見てくれるため、見込み客に効果的にアプローチすることが可能です。また、Webマーケティングの歴史はまだ浅く、苦手意識があり参入できていない企業も多い現状です。こうした企業がWeb戦略を取り入れることで大きな効果が期待できます。近年伸びているサービスや店舗は必ずWebを巧みに利用しています。しかし、何も知らない状態から調べて、実行できるような時間的・コスト的な余裕がある企業は多くありません。そこで、企業が自身のスケールに合わせてWebに関する相談を行い、代わりに専門のWebマーケターに手を動かしてもらうことで、少ないコストでビジネスを成長させることができます。 </p>
            </section>
            <section className="lp-sections service">
                <h2>サービス内容</h2>
                <h3>ホームページ LP キャンペーンページ作成</h3>
                <p>texttexttexttexttexttexttexttexttexttext</p>
                <h3>SEO対策 </h3>
                <p>texttexttexttexttexttexttexttexttexttext</p>
                <h3>MEO対策</h3>
                <p>texttexttexttexttexttexttexttexttexttext</p>
                <h3>既存ウェブサイトの
                    解析・更新・改善</h3>
                <p>texttexttexttexttexttexttexttexttexttext</p>
                <h3> SNS運用
                    コンテンツ作成・原稿作成</h3>
                <p>texttexttexttexttexttexttexttexttexttext</p>
                <h3>広告代理運用</h3>
                <p>texttexttexttexttexttexttexttexttexttext</p>
                <h3>在庫管理システム開発 アプリ開発</h3>
                <p>texttexttexttexttexttexttexttexttexttext</p>

            </section>
            <section className="lp-sections flow">
                <h2>実際のフロー</h2>
                <h3><span>1</span> まずはお悩みを教えてください</h3>
                <h3><span>2</span> データ収集</h3>
                <h3><span>3</span> 戦略決定</h3>
                <h3><span>4</span> コンテンツ作成、公開</h3>
                <h3><span>5</span> データ分析、調整</h3>
                <h3><span>6</span> 継続、または別の施策へ</h3>
            </section>
            <section className="lp-sections message">
                <h2>フランスで頑張る 日本人を応援したい。</h2>
                <p>  フランスでは、日本文化や日本製品が幅広い層に愛され、その人気は単なる一時のブームにとどまらず今も市場は拡大し続けています。ここパリでもたくさんの企業が様々なサービスを展開し、日本文化の素晴らしさを日々市民に伝えています。しかしながら、そのような企業をサポートできる環境はまだパリには少ないと感じます。私は、そんな企業がもっとITを活用することで、今の2倍、10倍の顧客にリーチでき、皆様のビジネスの目標を達成できる可能性があると信じています。
                </p>
            </section>
            <section className="lp-sections contact" id="contact">
                <h2>お申込みはこちらから</h2>
                <form action="post">
                    <label htmlFor="">name</label>
                    <input type="text"/>
                    <label htmlFor="">email</label>
                    <input type="text"/>
                    <label htmlFor="">company</label>
                    <input type="text"/>
                    <label htmlFor=""></label>
                    <input type="text"/>
                    <label htmlFor="">message</label>
                    <input type="tetextareaxt" className=""/>
                    <button type="submit">send</button>
                </form>
            </section>
        </main>
    );
}