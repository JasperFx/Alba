import{o as n,c as s,a,b as t,d as p}from"./app.144e7b1a.js";const e='{"title":"","description":"","frontmatter":"title:Writing Custom Assertions editLink:true","relativePath":"scenarios/assertions.md","lastUpdated":1629228318248}',o={},c=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"TIP"),t("p",null,"All of the assertions are applied during the Scenario execution, and any failures will be reported out in the Exception message thrown by Alba on Scenario failures.")],-1),i=t("p",null,"The Scenario assertions in Alba are completely extensible and you can happily add your own via extension methods - but please send anything that's generally useful as a pull request to Alba itself;-)",-1),l=t("p",null,"The first step is to write your own implementation of this interface:",-1),u=p('',4),r=p('',4),k=p('',4),d=p('',3);o.render=function(t,p,e,o,m,_){return n(),s("div",null,[c,i,l,a(" snippet: sample_IScenarioAssertion "),u,a(" snippet: sample_BodyContainsAssertion "),r,a(" snippet: sample_ContentShouldContain "),k,a(" snippet: sample_using_ContentShouldBe "),d])};export{e as __pageData,o as default};
