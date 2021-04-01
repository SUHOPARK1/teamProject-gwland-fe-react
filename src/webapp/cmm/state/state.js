import { useState, useEffect } from "react";
import axios from "axios";

const photo = require("assets/placeholders/photo.jpg");

let listeners = [];

let state = {
  data: {
    menu: [
      {
        name: "홈",
        url: "/",
      },
      {
        name: "설문하기",
        url: "/survey",
      },
      {
        name: "코스관리",
        url: "/course",
      },
      {
        name: "관광지",
        url: "/place",
      },
      {
        name: "관리자",
        url: "/manage",
      },
    ],
    posts: [
      {
        category_id: 1,
        featured: true,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities.<p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_0",
        image: photo,
        posting_date: "Feb 14, 2020",
        quote:
          "Enthusiastically generate multidisciplinary benefits rather than bricks-and-clicks action items. ",
        short:
          "Flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mout and idea-sharing.",
        title: "How to make your product the ferrari of business",
        user_id: "2",
      },
      {
        category_id: 2,
        featured: true,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_1",
        image: photo,
        posting_date: "Feb 07, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "Treat yourself to a night re-living the golden age of the railway with a stay at The Old Railway Station in Petworth, West Sussex. Conveniently recaptiualize backward-compatible best",
        title: "Believe in your business skills but never stop improving",
        user_id: "1",
      },
      {
        category_id: 3,
        featured: true,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_2",
        image: photo,
        posting_date: "Feb 12, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "The most important enjoy your lif thing is to enjoy your life - to be happy - it's enjoy your lif all that matters.",
        title: "Create a business your parents would be proud of",
        user_id: "2",
      },
      {
        category_id: 0,
        featured: true,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_3",
        image: photo,
        posting_date: "Feb 11, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "From the enclosure wall of the cemetery you can enjoy a distant view to the west into the Pustertal",
        title: "How to become our partner and start do business",
        user_id: "3",
      },
      {
        category_id: 1,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_4",
        image: photo,
        posting_date: "Feb 28, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "Dramatically expedite cross-media potentialities for worldwide services. Quickly engineer multidisciplinary innovation with best-of-breed e-commerce. Compellingly productivate.",
        title: "We create opportunity for new markets & industries",
        user_id: "0",
      },
      {
        category_id: 2,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_5",
        image: photo,
        posting_date: "Feb 09, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "I carry my years without submitting to the regimen of time and its chronology of dates and seasons.",
        title: "Project start is time to celeprate",
        user_id: "1",
      },
      {
        category_id: 3,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_6",
        image: photo,
        posting_date: "Feb 08, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "The loss of a single species is a tragic event and yet we lose an estimated 10,000 species to extinction every year",
        title: "Construction is reason to developing",
        user_id: "2",
      },
      {
        category_id: 0,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_7",
        image: photo,
        posting_date: "Feb 07, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "Objectively streamline magnetic leadership skills vis-a-vis an expanded array of paradigms appropriately incentivize adaptive.",
        title: "To afford luxury life always work hard",
        user_id: "3",
      },
      {
        category_id: 1,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_8",
        image: photo,
        posting_date: "Feb 06, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "Happiness is the universal feeling we all aspire to experience more of, yet, we can be an angry, moody",
        title: "Start you working process with tools",
        user_id: "0",
      },
      {
        category_id: 2,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_9",
        image: photo,
        posting_date: "Feb 05, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "Treat yourself to a night relive laden age of the railway Petworth with stay at The Old Railway Station in West Sussex",
        title: "Create new way of manufacture",
        user_id: "1",
      },
      {
        category_id: 3,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_10",
        image: photo,
        posting_date: "Feb 04, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "If I have a chance to whisper the best advice to a baby and he’ll remember it for the rest of his life is this",
        title: "Absolute knowledge on the business line",
        user_id: "2",
      },
      {
        category_id: 0,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_11",
        image: photo,
        posting_date: "Feb 03, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "We have great creative team they always ready to helped you. voluptatem quiase voluptase aspernatur auted fugit",
        title: "Master your tools for best results",
        user_id: "3",
      },
      {
        category_id: 1,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_12",
        image: photo,
        posting_date: "Feb 02, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "We have great creative team they always ready to helped you. voluptatem quiase voluptase aspernatur auted fugit",
        title: "Making business with minimal efforts",
        user_id: "0",
      },
      {
        category_id: 2,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_13",
        image: photo,
        posting_date: "Feb 01, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "We have great creative team they always ready to helped you. voluptatem quiase voluptase aspernatur auted fugit",
        title: "Small business must evolve in big company",
        user_id: "1",
      },
    ],
    users: [
      {
        about:
          "Efficiently visualize cutting-edge architectures vis-a-vis one-to-one collaboration and idea-sharing. Conveniently harness just in time niche markets after frictionless interfaces. Uniquely underwhelm frictionless imperatives and covalent users. Compellingly synthesize granular human capital before timely resources. ",
        id: 0,
        img:
          "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/reviews%2Fr1.jpg?alt=media&token=295fff4a-6766-4a97-9e3b-6c0f4c704c62",
        name: "Marta Smith",
      },
      {
        about:
          "Efficiently visualize cutting-edge architectures vis-a-vis one-to-one collaboration and idea-sharing. Conveniently harness just in time niche markets after frictionless interfaces. Uniquely underwhelm frictionless imperatives and covalent users. Compellingly synthesize granular human capital before timely resources. ",
        id: 1,
        img:
          "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/reviews%2Fr2.jpg?alt=media&token=b7b35188-bfc7-409d-9ad8-78bc89b36abc",
        name: "Mark Roberts",
      },
      {
        about:
          "Efficiently visualize cutting-edge architectures vis-a-vis one-to-one collaboration and idea-sharing. Conveniently harness just in time niche markets after frictionless interfaces. Uniquely underwhelm frictionless imperatives and covalent users. Compellingly synthesize granular human capital before timely resources. ",
        id: 2,
        img:
          "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/reviews%2Fr3.jpg?alt=media&token=40783389-abdc-4a53-8ea6-ee691732c668",
        name: "Fred Johnson",
      },
      {
        about:
          "Efficiently visualize cutting-edge architectures vis-a-vis one-to-one collaboration and idea-sharing. Conveniently harness just in time niche markets after frictionless interfaces. Uniquely underwhelm frictionless imperatives and covalent users. Compellingly synthesize granular human capital before timely resources. ",
        id: 3,
        img:
          "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/reviews%2Fr4.jpg?alt=media&token=f324453f-3080-41bf-80a4-94dd1e20e10f",
        name: "Ron Anderson",
      },
    ],
    categories: [
      {
        id: "12",
        title: "관광지",
      },
      {
        id: "14",
        title: "문화시설",
      },
      {
        id: "15",
        title: "축제/공연/행사",
      },
      {
        id: "25",
        title: "여행코스",
      },
      {
        id: "28",
        title: "레포츠",
      },
      {
        id: "32",
        title: "쇼핑",
      },
      {
        id: "39",
        title: "음식",
      },
    ],
    posts: [
      {
        category_id: 1,
        featured: true,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities.<p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_0",
        image: photo,
        posting_date: "Feb 14, 2020",
        quote:
          "Enthusiastically generate multidisciplinary benefits rather than bricks-and-clicks action items. ",
        short:
          "Flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mout and idea-sharing.",
        title: "How to make your product the ferrari of business",
        user_id: "2",
      },
      {
        category_id: 2,
        featured: true,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_1",
        image: photo,
        posting_date: "Feb 07, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "Treat yourself to a night re-living the golden age of the railway with a stay at The Old Railway Station in Petworth, West Sussex. Conveniently recaptiualize backward-compatible best",
        title: "Believe in your business skills but never stop improving",
        user_id: "1",
      },
      {
        category_id: 3,
        featured: true,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_2",
        image: photo,
        posting_date: "Feb 12, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "The most important enjoy your lif thing is to enjoy your life - to be happy - it's enjoy your lif all that matters.",
        title: "Create a business your parents would be proud of",
        user_id: "2",
      },
      {
        category_id: 0,
        featured: true,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_3",
        image: photo,
        posting_date: "Feb 11, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "From the enclosure wall of the cemetery you can enjoy a distant view to the west into the Pustertal",
        title: "How to become our partner and start do business",
        user_id: "3",
      },
      {
        category_id: 1,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_4",
        image: photo,
        posting_date: "Feb 28, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "Dramatically expedite cross-media potentialities for worldwide services. Quickly engineer multidisciplinary innovation with best-of-breed e-commerce. Compellingly productivate.",
        title: "We create opportunity for new markets & industries",
        user_id: "0",
      },
      {
        category_id: 2,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_5",
        image: photo,
        posting_date: "Feb 09, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "I carry my years without submitting to the regimen of time and its chronology of dates and seasons.",
        title: "Project start is time to celeprate",
        user_id: "1",
      },
      {
        category_id: 3,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_6",
        image: photo,
        posting_date: "Feb 08, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "The loss of a single species is a tragic event and yet we lose an estimated 10,000 species to extinction every year",
        title: "Construction is reason to developing",
        user_id: "2",
      },
      {
        category_id: 0,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_7",
        image: photo,
        posting_date: "Feb 07, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "Objectively streamline magnetic leadership skills vis-a-vis an expanded array of paradigms appropriately incentivize adaptive.",
        title: "To afford luxury life always work hard",
        user_id: "3",
      },
      {
        category_id: 1,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_8",
        image: photo,
        posting_date: "Feb 06, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "Happiness is the universal feeling we all aspire to experience more of, yet, we can be an angry, moody",
        title: "Start you working process with tools",
        user_id: "0",
      },
      {
        category_id: 2,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_9",
        image: photo,
        posting_date: "Feb 05, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "Treat yourself to a night relive laden age of the railway Petworth with stay at The Old Railway Station in West Sussex",
        title: "Create new way of manufacture",
        user_id: "1",
      },
      {
        category_id: 3,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_10",
        image: photo,
        posting_date: "Feb 04, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "If I have a chance to whisper the best advice to a baby and he’ll remember it for the rest of his life is this",
        title: "Absolute knowledge on the business line",
        user_id: "2",
      },
      {
        category_id: 0,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_11",
        image: photo,
        posting_date: "Feb 03, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "We have great creative team they always ready to helped you. voluptatem quiase voluptase aspernatur auted fugit",
        title: "Master your tools for best results",
        user_id: "3",
      },
      {
        category_id: 1,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_12",
        image: photo,
        posting_date: "Feb 02, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "We have great creative team they always ready to helped you. voluptatem quiase voluptase aspernatur auted fugit",
        title: "Making business with minimal efforts",
        user_id: "0",
      },
      {
        category_id: 2,
        full:
          "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
        id: "post_13",
        image: photo,
        posting_date: "Feb 01, 2020",
        quote:
          "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
        short:
          "We have great creative team they always ready to helped you. voluptatem quiase voluptase aspernatur auted fugit",
        title: "Small business must evolve in big company",
        user_id: "1",
      },
    ]
  },
  
  error: null,
  sidebar: false,
  modal: false,
  video: false,
  request: {
    modal: false,
    text: "",
  },
};

const actions = {
  fetch: async () => {
    try {
      const response = await axios.get(
        // Change with your database path
        "/api/data"
      );
      state = { ...state, data: response.data };
    } catch (err) {
      state = { ...state, error: err };
    }

    for (const listener of listeners) {
      listener(state);
    }
  },
  toogleSidebar: () => {
    state = { ...state, sidebar: !state.sidebar };

    for (const listener of listeners) {
      listener(state);
    }
  },
  toogleModal: () => {
    state = { ...state, modal: !state.modal };

    for (const listener of listeners) {
      listener(state);
    }
  },
  toogleRequest: (payload) => {
    state = {
      ...state,
      request: { modal: !state.request.modal, text: payload },
    };

    for (const listener of listeners) {
      listener(state);
    }
  },
  toogleVideo: () => {
    state = { ...state, video: !state.video };

    for (const listener of listeners) {
      listener(state);
    }
  },
};

export const useCustomState = () => {
  const setState = useState(state)[1];

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);

  return [state, actions];
};