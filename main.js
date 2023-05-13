const xpathExpression = "/html/body/div[3]/div/div[3]/div/div/div/div[2]/div[3]/div[3]/div/div[4]/div/div[2]/div/div[1]/div/div[3]";

const elementToRemove = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (elementToRemove)
{
      elementToRemove.innerHTML = '';
}

const xpathExpression2 = "/html/body/div[3]/div/div[3]/div/div/div/div[2]/div[3]/div[3]/div/div[3]/div/div/div[2]/div[4]/div/div/div[1]/div[3]/div[3]";

const elementToRemove2 = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (elementToRemove2)
{
      elementToRemove2.innerHTML = '';
}