"use client";

import React from "react";
import type { NextPage } from "next";
import MainLayout from "@/layout/App";
import Utterance from "@/components/Utterance";
import Title from "@/components/Title";
import Payments from "@/components/Payments";

const Main: NextPage = () => {
  return (
    <section id="main">
      <MainLayout
        utterance={
          <Utterance repository="J1min/comments" theme="github-light" />
        }
        title={
          <Title>
            <p>안녕하세요! 홍지민입니다.</p>
            <p>110550537669 신한</p>
          </Title>
        }
        money={<Payments />}
      />
    </section>
  );
};

export default Main;
