'use client';
import React, { useEffect } from 'react';
//= Components
import InfoArea from './InfoArea';
import AuthorArea from './AuthorArea';
import NextPrev from './NextPrev';
import Comments from './Comments';
import CommentsForm from './CommentsForm';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function MainPost() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="main-post section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="caption text-center">
              <div className="gat">
                <a href="#0"><span>Web Design</span></a>
                <a href="#0"><span>Envato</span></a>
              </div>
              <h1 className="fz-55 mt-30">Network of wormholes colonies extraordinary claims require.</h1>
              <p className="sub-title mt-15">6 , August 2022 - By Admin</p>
            </div>
            <div className="main-img mb-80 mt-40">
              <img src="/assets/imgs/blog/m.jpg" alt="" className="radius-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="cont">
              <div className="text mb-20">
                <div className="d-flex align-items-center mb-20">
                  <span className="fz-60 fw-500 main-color line-height-1 mr-10">A</span>
                  <p>new report said earlier this week that Apple is working on a brand new laptop. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air.</p>
                </div>
                <p>new report said earlier this week that Apple is working on a brand new laptop. Apple plans to release a 15-inch MacBook Air in 2023, a first for the Air series. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air.</p>
              </div>
              <div className="text">
                <p>However, Apple might not include it in the Air series when it launches it. As for the notebook’s release date, the 15-inch MacBook isn’t coming soon. It’ll get a late 2023 release at best, according to the new claims.</p>
              </div>
              <div className="title mt-30">
                <h5 className="fw-500">What sizes do MacBook Airs come in?</h5>
              </div>
              <div className="text mt-20">
                <p>Apple currently sells only one MacBook Air size. The laptop comes in a 13-inch version that matches the pre-2021 13-inch MacBook Pro size. Previously, Apple sold an 11-inch MacBook Air, but the company discontinued that model in 2017.
                </p>
              </div>
              <div className="post-qoute mt-50">
                <h6 className="line-height-28 fz-20">
                  <span className="l-block">Increase your site traffic and gain new customers with a beautiful and functional blog.</span>
                  <span className="sub-title main-color mt-20 mb-0"> - ThemesCamp Code</span>
                </h6>
              </div>
              <div className="mb-50 mt-50">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="iner-img sm-mb30">
                      <img src="/assets/imgs/blog/b1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="iner-img">
                      <img src="/assets/imgs/blog/b2.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="title mb-10">
                <h5 className="fw-500">Apple currently sells only one MacBook Air size.</h5>
              </div>
              <div className="text mb-20">
                <p>A new report said earlier this week that Apple is working on a brand new laptop. Apple plans to release a 15-inch MacBook Air in 2023, a first for the Air series. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air.</p>
              </div>
              <div className="unorder-list mb-30">
                <h6 className="mb-10">Ordered & Unordered Lists.</h6>
                <ul className="rest">
                  <li>Yet this above sewed flirted opened ouch</li>
                  <li>Goldfinch realistic sporadic ingenuous</li>
                  <li>Abominable this abidin far successfully then like piquan</li>
                </ul>
              </div>
              <div className="order-list mb-30">
                <h6 className="mb-10">Ordered & Unordered Lists.</h6>
                <ul className="rest">
                  <li><span>01 -</span> Yet this above sewed flirted opened ouch</li>
                  <li><span>02 -</span> Goldfinch realistic sporadic ingenuous</li>
                  <li><span>03 -</span> Abominable this abidin far successfully then like piquan</li>
                </ul>
              </div>
              <div className="text">
                <p>However, Apple might not include it in the Air series when it launches it. As for the notebook’s release date, the 15-inch MacBook isn’t coming soon. It’ll get a late 2023 release at best, according to the new claims.</p>
              </div>
              {/* Info Area */}
              <InfoArea />
              {/* Author Area */}
              <AuthorArea />
              {/* Next Prev Post */}
              <NextPrev />
              {/* Comments */}
              <Comments />
              {/* Comments Form */}
              <CommentsForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainPost