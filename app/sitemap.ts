import type { MetadataRoute } from 'next';
import { getAllBranches } from '@/lib/locations';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://caffeinefactory.np';
    const branches = getAllBranches();

    const branchUrls: MetadataRoute.Sitemap = branches.map((branch) => ({
        url: `${baseUrl}/locations/${branch.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        ...branchUrls,
    ];
}
