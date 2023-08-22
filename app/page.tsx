"use client";

import React from "react";
import type { NextPage } from "next";
import MainLayout from "@/layout/App";
import Utterance from "@/components/Utterance";
import Title from "@/components/Title";
import Button from "@/components/Button";
import Link from "next/link";

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
            <p>돈 주세요</p>
            <p>110550537669 신한</p>
          </Title>
        }
        money={
          <Link href="/">
            <Button>돈 주기 버튼</Button>
          </Link>
        }
      />
    </section>
  );
};

export default Main;
