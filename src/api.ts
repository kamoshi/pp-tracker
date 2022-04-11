export async function fetchPackage(packageId: string): Promise<string> {
  return await fetch('https://uss.poczta-polska.pl/uss/v1.0/tracking/checkmailex', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API_KEY': 'BiGwVG2XHvXY+kPwJVPA8gnKchOFsyy39Thkyb1wAiWcKLQ1ICyLiCrxj1+vVGC+kQk3k0b74qkmt5/qVIzo7lTfXhfgJ72Iyzz05wH2XZI6AgXVDciX7G2jLCdoOEM6XegPsMJChiouWS2RZuf3eOXpK5RPl8Sy4pWj+b07MLg=.Mjg0Q0NFNzM0RTBERTIwOTNFOUYxNkYxMUY1NDZGMTA0NDMwQUIyRjg4REUxMjk5NDAyMkQ0N0VCNDgwNTc1NA==.b24415d1b30a456cb8ba187b34cb6a86'
    },
    body: JSON.stringify({ language: 'EN', number: packageId, addPostOfficeInfo: true })
  })
    .then(res => res.json());
}